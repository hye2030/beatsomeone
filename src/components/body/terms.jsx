function Terms({terms}) {
    return (
        <div className="modal_wrap big_modal terms_modal">
            <div className="modal_box">
            <button className="x_btn close_btn"></button>
                <div className="top_area">
                    <h3 className="title">
                        {terms[0].termsType}
                    </h3>
                </div>
                <div className="text_area" dangerouslySetInnerHTML={{__html: terms[0].content}}>
                </div>
            </div>
        </div>
    )
}

export default Terms;
