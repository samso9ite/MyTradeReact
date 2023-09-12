import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { useState } from "react";
import axios from 'axios';
import ImageUploading from 'react-images-uploading';

    const ImageDrawer = (props) => {
    const [state, setState] = useState({
        isPaneOpen: false,
        isPaneOpenLeft: false,
      });
    
    const [images, setImages] = useState([]);
    const maxNumber = 69;
    const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

//   const handleUpload = async (imageFile, clientId) => {
//     try {
//       const formData = new FormData();
//       formData.append('image', file);
//       const response = await axios.post('https://api.imgur.com/3/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data', // Set the Content-Type header
//           Authorization: `Client-ID 4da84cdc83fab73`, // Replace with your actual client ID
//         },
//       });
  
//       // Handle the response here (e.g., extract image URL)
//     } catch (error) {
//       // Handle errors here
//       console.error('Error uploading image to Imgur:', error);
//     } 
//   };
  
    return(
        <SlidingPane 
        isOpen={props.isPaneOpen}
        title="Add Card Image"
        width='35%'
        onRequestClose={
            props.onRequestClose
        }> 
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
          </center>
        )}
      </ImageUploading>

      <textarea name="comment" className="form-control w-full mt-5">Note: If card digits aren't clear please enter them here.</textarea>
      <center><button type="submit" class="btn btn-primary large mr-1 flex mt-5"> Complete Trade</button></center>
   
        {/* <input name="file" type="file" onChange={onFileChange} />
        <button onClick={handleUpload}>Upload</button> */}
        </SlidingPane>
    )
}

export default ImageDrawer;