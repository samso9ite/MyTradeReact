import ReactDOM from 'react-dom'

const SlideOverRoot = document.getElementById('slide-over__root')

const SlideOver = (props) => {
   
   
    return ( 
        <>
        {/* {ReactDOM.createPortal( */}
            <div id="medium-slide-over-size-preview" class="modal modal-slide-over" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header p-5">
                            <h2 class="font-medium text-base mr-auto">Selected Rate</h2>
                        </div>
                        <div class="modal-body"> {props.children} </div>
                    </div>
                </div>
            </div>,
        {/* SlideOverRoot
        )} */}
        </>   
    );
}
 
export default SlideOver;                   