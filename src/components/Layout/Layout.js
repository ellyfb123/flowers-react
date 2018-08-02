import React from 'react';
import { connect } from 'react-redux';

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export const Layout = (props) => {
    const { children } = props;
    return (
       <div>
           <Header />
           {children}
           <Footer />
       </div>
    );
}

const ConnectedLayout = connect()(Layout);

export default InnerContent =>
    props => (
        <ConnectedLayout {...props}>
            <InnerContent {...props} />
        </ConnectedLayout>
    );
