import React from 'react';
import SectionTitle from './sectiontitle';
import { StaticQuery, graphql } from 'gatsby';
import { PaperPlane, Mapmarker } from './icons';
import SocialLinks from './sociallinks';
import '../style/contact.less';
import { Timeline } from 'react-twitter-widgets';

class Contact extends React.Component {
  render() {
    return (
      <section id="contact" className="container">
        <div className="section-title">
          <SectionTitle title="CONTACT" />
        </div>
        <div className="row">
            <div className="col s12 m6">
              <form>
                <div className="field">
                <Timeline   
                  dataSource={{  
                    sourceType: 'profile',  
                    screenName: 'BandTLC'  
                  }}  
                  options={{  
                    username: 'BandTLC',  
                    width: '120%',  
                    height: '200' 
                  }}  
                  chrome="transparent"
                />  
                </div>
              </form>
            </div>
          <div className="col s12 m6 details">

              <p className="text-tertiary">
                {this.props.contact.description}
              </p>

            <ul>
              <li className="text-tertiary item">
                <span className="icon mapmarker">
                  <Mapmarker />
                </span>
                {this.props.contact.address}
              </li>
              <li>
                <SocialLinks />
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
            query {
                site {
                    siteMetadata {
                        contact {
                            api_url
                            description
                            mail
                            phone
                            address
                        }
                    }
                }
            }
        `}
    render={data => <Contact contact={data.site.siteMetadata.contact} />}
  />
);
