import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {StaticQuery, graphql} from 'gatsby';

const Layout = ({children}) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <>
                <Helmet
                    title={data.site.siteMetadata.title}
                    meta={[
                        {
                            name: 'description',
                            content: data.site.siteMetadata.title
                        },
                        {
                            name: 'keywords',
                            content: `Chrome extension, ${
                                data.site.siteMetadata.title
                            }`
                        }
                    ]}>
                    <html lang="en" />
                    <link
                        rel="preload"
                        href="/images/Single-instance.gif"
                        as="image"
                    />
                    <link
                        rel="preload"
                        href="/images/Auto-refresh.gif"
                        as="image"
                    />
                </Helmet>

                <div
                    style={{
                        maxWidth: 920,
                        margin: '0 auto',
                        padding: '1.2rem 0rem'
                    }}>
                    {children}
                </div>
            </>
        )}
    />
);

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
