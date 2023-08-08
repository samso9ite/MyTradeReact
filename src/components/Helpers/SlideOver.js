const SlideOver = (props) => {
    return ( 
        <>
           <div id="medium-slide-over-size-preview" class="modal modal-slide-over" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header p-5">
                            <h2 class="font-medium text-base mr-auto">Selected Rate</h2>
                            <button type="button" data-tw-dismiss="modal" class="btn btn-outline-secondary w-20 mr-1" onClick={props.closeTab}>Cancel</button>
                        </div>
                        <div class="modal-body">   {props.children} </div>
                    </div>
                </div>
            </div> 
        </>   
    );
}
 
export default SlideOver;