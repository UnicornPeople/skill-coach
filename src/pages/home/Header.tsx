import styles from "./Header.module.scss";
import headerlogo from "../../resources/logo_dark.png";
import headerMenuImage from "../../resources/img_home_header_menu.png";
import isMobile from "../../utils/CommonUtils";
import { APPLY_GUIDE_LINK, INTERVIEWER_GUIDE_LINK, QA_LINK } from "../../Const";
import { getAnalytics, logEvent } from "firebase/analytics";

const Header = () => {
  const onApplyGuideClick = () => {
    const analytics = getAnalytics();
    logEvent(analytics, 'home_header_user_guide_click', {});

    window.open(APPLY_GUIDE_LINK, "_blank");
  };

  const onInterviewerGuideClick = () => {
    const analytics = getAnalytics();
    logEvent(analytics, 'home_header_interviewer_guide_click', {});

    window.open(INTERVIEWER_GUIDE_LINK, "_blank");
  };

  const onQALinkClick = () => {
    const analytics = getAnalytics();
    logEvent(analytics, 'home_header_kakaotalk_qa_click', {});

    window.open(QA_LINK, "_blank");
  };

  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <div>
          <img src={headerlogo} alt="logo" />
        </div>

        {isMobile() ? (
          <div>
            <img
              className={styles.menu}
              src={headerMenuImage}
              alt="headerMenuImage"
            />
          </div>
        ) : (
          <div>
            <nav className={styles.navigation}>
              <ul>
                <li onClick={onApplyGuideClick}>면접자 가이드</li>
                <li onClick={onInterviewerGuideClick}>면접관 가이드</li>
                <li onClick={onQALinkClick}>고객지원</li>
              </ul>
            </nav>

            {/* <div className={styles.login_box}>
              <div className={styles.login_text}>Login</div>
            </div> */}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
