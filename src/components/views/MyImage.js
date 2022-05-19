const MyImage = () => {

    return (
        <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div class="bg-dark rounded shadow-sm"><img src="https://bootstrapious.com/i/snippets/sn-gallery/img-2.jpg" alt="" class="img-fluid card-img-top"/>
                <div class="p-4">
                    <h5 class="text-light">Blorange</h5>
                    <p class="medium text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                    <div class="d-flex align-items-center justify-content-between rounded-pill bg-secondary px-3 py-2 mt-4">
                        <p class="small mb-0"><i class="fa fa-picture-o mr-2"></i><span class="p-2">PNG</span></p>
                        <span class="badge rounded-pill bg-success">Disponivel</span>
                    </div>
                </div>
                <div class="d-grid p-3">
                    <input type="submit" class="btn-submit-form" value="Download" />
                </div>
            </div>
        </div>
    );

};

export default MyImage;