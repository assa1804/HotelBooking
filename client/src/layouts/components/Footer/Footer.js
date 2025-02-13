import { Link } from 'react-router-dom';
import images from '../../../assets/images';
import './Footer.scss';

function Footer() {
    return (
        <footer className="footer-area section-padding-80-0">
            <div className="main-footer-area">
                <div className="container">
                    <div className="row align-items-baseline justify-content-between">
                        <div className="col-12 col-sm-12 col-lg-6">
                            <div className="single-footer-widget">
                                <Link href="/" className="footer-logo">
                                    <img src={images.logoLight} alt="logo" />
                                </Link>

                                {/* <h4>+12 345-678-9999</h4> */}
                                <h4>Thông tin thành viên nhóm 11</h4>
                                <span>Nguyễn Tiến Đạt - 2254810069@vaa.edu.vn</span>
                                <span>Nguyễn Quốc Dũng - 2254810288@vaa.edu.vn</span>
                                <span>Đoàn Thạch Hồ Anh - 2254810273@vaa.edu.vn</span>
                                <span>Nguyễn Ngọc Anh Thư - 225481021@vaa.edu.vn</span>
                                <span>Nguyễn Đoàn Minh Thương - 2254810291@vaa.edu.vn</span>
                                <span>Học viện Hàng Không TP HCM</span>
                            </div>
                        </div>

                        {/* <div className="col-12 col-sm-6 col-lg-3 mt-4">
                            <div className="single-footer-widget mb-80">
                                <h5 className="widget-title">Blogs</h5>

                                <div className="latest-blog-area">
                                    <a href="#" className="post-title">
                                        Freelance Design Tricks How
                                    </a>
                                    <span className="post-date">
                                        <i className="fa fa-clock-o" aria-hidden="true"></i> Jan 02, 2019
                                    </span>
                                </div>

                                <div className="latest-blog-area">
                                    <a href="#" className="post-title">
                                        Free Advertising For Your Online
                                    </a>
                                    <span className="post-date">
                                        <i className="fa fa-clock-o" aria-hidden="true"></i> Jan 02, 2019
                                    </span>
                                </div>
                            </div>
                        </div> */}

                        <div className="col-12 col-sm-12 col-lg-6">
                            <div className="single-footer-widget">
                                <h5 className="widget-title">Theo dõi bản tin</h5>
                                <span>Theo dõi bản tin của chúng tôi để nhận thông báo về các bản cập nhật mới.</span>

                                <form className="nl-form">
                                    <input type="email" className="form-control" placeholder="Enter your email..." />
                                    <button type="submit" disabled>
                                        <i className="bi bi-send-fill"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="copywrite-content">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-8">
                            <div className="copywrite-text">
                                <p>Copyright &copy; 2024 All rights reserved | This website is made by team 11</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="social-info">
                                <span>
                                    <i className="bi bi-facebook"></i>
                                </span>
                                <span>
                                    <i className="bi bi-twitter"></i>
                                </span>
                                <span>
                                    <i className="bi bi-instagram"></i>
                                </span>
                                <span>
                                    <i className="bi bi-github"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
