import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Img from 'gatsby-image';
import SEO from '../components/seo';
import '../style/basepage.less';
import SectionTitle from '../components/sectiontitle';

export default function({ data }) {
  return (
    <Layout>
      <div style={{ minHeight: "600px" }}>
      <SEO
        lang="en"
        title={data.markdownRemark.frontmatter.title}
        description={data.markdownRemark.frontmatter.description}
      />
        <section id="contact" className="container">
          <div className="section-title">
            <SectionTitle title="ABOUT" />
          </div>
        </section>
        <div className="content">
        <article className="post">
            {data.markdownRemark.frontmatter.image && (
              <div className="center">
                <div className="img">
                  <Img
                    fluid={
                      data.markdownRemark.frontmatter
                        .image.childImageSharp.fluid
                    }
                  />
                </div>
              </div>
            )}
          <div
            className="text-center"
            dangerouslySetInnerHTML={{
              __html : data.markdownRemark.html
            }}>
          </div>
        </article>
        </div>
    </div>
    </Layout>
  );
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                description
                image {
                    publicURL
                    childImageSharp {
                        fluid(maxWidth: 1920) {
                            srcSet
                            ...GatsbyImageSharpFluid
                        }
                        id
                    }
                }
            }
        }
    }
`;
