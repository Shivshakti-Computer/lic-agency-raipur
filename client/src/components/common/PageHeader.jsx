const PageHeader = ({ title, subtitle }) => {
    return (
        <section className="page-header section-padding bg-light">
            <div className="container text-center">

                <h1 className="fw-bold mb-2">
                    {title}
                </h1>

                {subtitle && (
                    <p className="fs-5 text-muted">
                        {subtitle}
                    </p>
                )}

            </div>
        </section>
    );
};

export default PageHeader;
