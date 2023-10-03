import React from 'react'
import { APP_BRAND, APP_NAME } from '../../helper/helper'

export default function Footer() {
    return (
        <>
            <footer id="footer" className="footer">
                <div className="copyright">
                    © Copyright <strong><span>{APP_NAME}</span></strong>. All Rights Reserved
                </div>
                <div className="credits">

                    Designed by <a href="https://bootstrapmade.com/">{APP_BRAND}</a>
                </div>
            </footer>
            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
        </>

    )
}
