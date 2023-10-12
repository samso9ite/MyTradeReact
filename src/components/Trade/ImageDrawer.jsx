import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import ImageUploading from 'react-images-uploading';
import Api from "../../Api";
import { Link } from "react-router-dom";
import { tradeAction } from "../../store/trade-slice";

  const ImageDrawer = (props) => {
    const [state, setState] = useState({
        isPaneOpen: false,
        isPaneOpenLeft: false,
    });
    const [submitting, setSubmitting] = useState(false)
    const [digit, setDigit] = useState('')
    const [images, setImages] = useState([]);
    const maxNumber = 69;

    const storeTradeDetails = useSelector(state => state.trade.trade)
    const onChange = (imageList, addUpdateIndex) => {
      setImages(imageList);
    };
    const [isSuccess, setIsSuccess] = useState(false)
    const [imageUrls, setImageUrls] = useState([])
    const digitHandler = (event) => {
      setDigit(event.target.value)
    }
    const dispatch = useDispatch()

  const handleUpload = async () => {
    setSubmitting(true)
    try{
        const uploadedImageUrls = await Promise.all(
            (images.map( async(image) => {
                const formData = new FormData();
                formData.append('image', image.file);
                const response = await axios.post('https://api.imgur.com/3/upload', formData, {
                    headers: {
                      'Content-Type': 'multipart/form-data',
                      Authorization: 'Client-ID c383bbc6a421d53',
                    }
                });
                return response.data.data.link;
            })
            ))
                // Add the uploaded image URLs to the state
                setImageUrls((prevState) => [...prevState, ...uploadedImageUrls]);
                const tradeData = {transactions:{
                  card: storeTradeDetails.card,
                  country:storeTradeDetails.country,
                  rate: storeTradeDetails.rate,
                  card_type: storeTradeDetails.card_type,
                  card_value: storeTradeDetails.card_value,
                  amount: storeTradeDetails.price,
                  card_image: uploadedImageUrls,
                  card_receipt: '',
                  card_digit: digit
                },
                totalAmount:storeTradeDetails.price
                }
                Api.axios_instance.post(Api.baseUrl+'/user/card/sell', tradeData)
                .then(res => {
                  setIsSuccess(true)
                  // Clear State and Trade Store
                  setImageUrls([])
                  setDigit('')
                  dispatch(tradeAction.tradeDetails({}))
                })
              
            } 
    catch (error) {
            // Handle errors here
            console.error('Error uploading image', error);
            }
      setSubmitting(false)
  };
  
    return(
        <SlidingPane 
        isOpen={props.isPaneOpen}
        title="Complete Trade"
        width='25rem'
        onRequestClose={
          <i className="fa fa-times-circle-o transform" style={{fontSize:"22px", float:'right'}}  onClick={() => { setState({ isPaneOpen: false })}}></i> 
        }> 
        <i className="fa fa-times-circle-o transform" style={{fontSize:"22px", float:'right'}}  onClick={() => { setState({ isPaneOpen: false })}}></i> 
        {!isSuccess &&
          <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
          >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            
            <center>
              <div className="upload__image-wrapper" class="dropzone">
                <button
                  style={isDragging ? { color: 'red' } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  <div class="col-span-12 sm:col-span-12 lg:col-span-2 xl:col-span-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" icon-name="cloud-rain" data-lucide="cloud-rain" class="lucide lucide-cloud-rain block mx-auto"><path d="M20 16.2A4.5 4.5 0 0017.5 8h-1.8A7 7 0 104 14.9"></path><path d="M16 14v6"></path><path d="M8 14v6"></path><path d="M12 16v6"></path></svg> 
                        <div class="text-center text-l mt-2">Click or Drop Card Images Here</div>
                    </div>
                </button>
                
                <br/><br />
                <button class="btn btn-danger" onClick={onImageRemoveAll}>Remove all images</button><br /><br />
                {imageList.map((image, index) => (
                  <div key={index} className="image-item">
                    <img src={image['data_url']} alt="" width="100" />
                    <div className="image-item__btn-wrapper">
                      <button class="btn btn-default" onClick={() => onImageUpdate(index)}>Update</button>
                      <button  onClick={() => onImageRemove(index)} style={{color:'red'}}>Remove</button>
                    </div>
                  </div>
                ))}
              </div>

              <textarea className="form-control w-full mt-5" onChange={digitHandler} placeholder="Note: If card digits aren't clear please enter them here."></textarea>
              <button type="submit" class="btn btn-primary large mr-1 flex mt-5" onClick={handleUpload} disabled={submitting}>{submitting ? 'Submitting Trade' : 'Submit Trade'}</button>
            </center>
          )}
          </ImageUploading>
        }
      {isSuccess &&
        <div class="mt-10">
          <center>
            <img src={process.env.PUBLIC_URL + '/dist/images/check.gif'} />
            <h2 style={{fontSize:'17px', fontWeight:'500'}}>Your trade has been created succesfully and awaiting approval</h2> 
            <Link to={'/'}> <button type="submit" class="btn btn-primary large mr-1 flex mt-5" >Go to Dashboard</button></Link>
          </center>
        </div>
      }
      </SlidingPane>
    )
}

export default ImageDrawer;