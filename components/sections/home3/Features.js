import Link from "next/link"


export default function Features() {
    return (
        <>
           <section className="feature-section pb_90">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-one">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-9"></i></div>
                                <h3><Link href="/">Seamless Business Setup</Link></h3>
                                <p>Start your company effortlessly with our expert guidance in the UAE and beyond.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-one">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-10"></i></div>
                                <h3><Link href="/">Golden Visa Support</Link></h3>
                                <p>Secure your residency in Dubai with our streamlined Golden Visa application process.
</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-one">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-11"></i></div>
                                <h3><Link href="/">Dubai Attestation</Link></h3>
                                <p>Fast and reliable document attestation services, tailored for Dubai.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-one">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-12"></i></div>
                                <h3><Link href="/">Global Reach</Link></h3>
                                <p>Trusted business solutions and attestations in over 120 countries, customised for you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
