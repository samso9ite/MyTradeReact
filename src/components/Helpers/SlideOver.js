const SlideOver = (props) => {
    return ( 
        <>
           <div id="medium-slide-over-size-preview" className="modal modal-slide-over" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                      {props.children}
                    </div>
                </div>
            </div> 
        </>   
    );
}
 
export default SlideOver;