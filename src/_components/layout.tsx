import React, { useContext } from "react";
import Header from './header';
import Footer from './footer';
import '../style/main.scss';
import { ThemeContext } from "../store/ContextAPI";



export const Layout = ({children} :any ) => {

    const { light } = useContext<any>(ThemeContext);

    return (
        <>
            <Header />
            <div className={light ? `light` : `dark`}>
                <main>
                    <div>{children}</div>
                </main>
                <Footer />
            </div>
        </>
    )

}

export default Layout;