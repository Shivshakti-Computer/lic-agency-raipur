const PlansPreview = () => {
    return (
        <section className="section-padding bg-white">
            <div className="container">

                <h2 className="text-center fw-bold mb-4">
                    लोकप्रिय योजनाएं
                </h2>

                <div className="row text-center">

                    <div className="col-md-3">✔ जीवन बीमा योजना</div>
                    <div className="col-md-3">✔ बच्चों की शिक्षा योजना</div>
                    <div className="col-md-3">✔ पेंशन योजना</div>
                    <div className="col-md-3">✔ टर्म इंश्योरेंस</div>

                </div>

                <div className="text-center mt-4">
                    <button className="btn btn-outline-primary">
                        पूरी जानकारी के लिए संपर्क करें
                    </button>
                </div>

            </div>
        </section>
    );
};

export default PlansPreview;
