import React, {Component} from 'react';
import {graphql, StaticQuery} from 'gatsby';
import css from './index.module.css';

import Layout from '../components/layout';

const FeatureButton = ({id, title, onClick}) => (
    <button onClick={() => onClick(id)} className={css.featuredButton}>
        <h4>{title}</h4>
    </button>
);

class IndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: 0,
            description: [
                'Auto close your view-source tabs when you close the opener tab',
                'Maintain one view-source tab at a time for a clutter-free development',
                'Auto refresh all view-source tabs when you refresh the opener tab'
            ]
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick(id) {
        this.setState({
            show: id
        });
    }

    render() {
        return (
            <StaticQuery
                query={graphql`
                    query {
                        allFile(filter: {ext: {eq: ".gif"}}) {
                            edges {
                                node {
                                    relativePath
                                }
                            }
                        }
                        allMarkdownRemark {
                            edges {
                                node {
                                    html
                                }
                            }
                        }
                        site {
                            siteMetadata {
                                title
                            }
                        }
                    }
                `}
                render={data => (
                    <Layout>
                        <div className={css.header}>
                            <img src="/icons/icon-48x48.png" alt="Logo" />
                            <h3>{data.site.siteMetadata.title}</h3>
                        </div>
                        <div
                            className={css.markdown}
                            dangerouslySetInnerHTML={{
                                __html:
                                    data.allMarkdownRemark.edges[0].node.html
                            }}
                        />
                        <div className={css.menulist}>
                            <ul>
                                <li
                                    className={
                                        this.state.show === 0 ? css.active : ''
                                    }>
                                    <FeatureButton
                                        id={0}
                                        title="Auto close"
                                        onClick={this.onClick}
                                    />
                                </li>
                                <li
                                    className={
                                        this.state.show === 1 ? css.active : ''
                                    }>
                                    <FeatureButton
                                        id={1}
                                        title="Single instance"
                                        onClick={this.onClick}
                                    />
                                </li>
                                <li
                                    className={
                                        this.state.show === 2 ? css.active : ''
                                    }>
                                    <FeatureButton
                                        id={2}
                                        title="Auto refresh"
                                        onClick={this.onClick}
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className={css.featureDescription}>
                            {this.state.description[this.state.show]}
                        </div>
                        <div className={css.imgContainer}>
                            <img
                                className={css.gif}
                                src={`/images/${
                                    data.allFile.edges[this.state.show].node
                                        .relativePath
                                }`}
                                alt=""
                            />
                        </div>
                    </Layout>
                )}
            />
        );
    }
}

export default IndexPage;
