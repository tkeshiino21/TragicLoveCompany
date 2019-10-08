import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import SocialLinks from '../components/sociallinks';
import PortfolioList from '../components/list-portfolio';
import BlogList from '../components/list-blog';
import Contact from '../components/contact';
import MusicVideo from '../components/musicvideo'
import '../style/wall.less';


class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { winHeight: '100vh',};
  }

  createSVGElement(n, v) {
    n = document.createElementNS('http://www.w3.org/2000/svg', n);
    for (const p in v) n.setAttributeNS(null, p, v[p]);
    return n;
  }

  componentDidMount() {
    this.setWindowHeight();
    const _this = this;
    window.addEventListener('resize', () => {
      _this.setWindowHeight();
    });
    const sWidth = this.svg.clientWidth;
    const tText = this.svg.querySelector('text');
    let tWidth = tText.getBoundingClientRect().width;

    if (tWidth > sWidth) {
      const tInnerText = tText.innerHTML;
      if (tInnerText.split(' ').length > 1) {
        tText.innerHTML = '';
        tInnerText.split(' ').forEach((e, i) => {
          const tSpan = _this.createSVGElement('tspan', {
            dy: i === 0 ? '-0.1em' : '0.9em', x: '50',
          });
          tSpan.innerHTML = e;
          tText.appendChild(tSpan);
        });
        setTimeout(() => {
          _this.svg.style.height = tText.getBoundingClientRect().height + 70;
          _this.svg.style.margin = '15px auto';
        }, 250);
      } else {
        while (tWidth > sWidth) {
          const fontSize = parseInt(
            window
              .getComputedStyle(tText, null)
              .getPropertyValue('font-size'),
          );
          tText.style.fontSize = `${fontSize - 1}px`;
          tWidth = tText.getBoundingClientRect().width;
        }
      }
    }
  }

  setWindowHeight() {
    this.setState({
      winHeight: window.innerHeight,
    });
  }

  render() {
    return (
      <Layout placeholder={false}>
        <SEO
          lang="jp"
          title={this.props.data.site.siteMetadata.title}
        />
        <div
          className="wall"
          style={{ height: `${this.state.winHeight}px` }}
        >
          <div className="intro container">
            <div className="main-title text-primary">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid slice"
                ref={(c) => (this.svg = c)}
              >
                <pattern
                  id="wallPattern"
                  patternUnits="userSpaceOnUse"
                  width="100"
                  height="100"
                >
                  <rect
                    x="0" y="0"
                    className="fill-primary"
                    width="100"
                    height="100"
                  />
                  <image
                    xlinkHref="/images/wall.jpg"
                    height="100"
                    width="100"
                    y="0"
                    preserveAspectRatio="none"
                  />
                </pattern>
                <text
                  fill="url(#wallPattern)"
                  textAnchor="middle"
                  x="50"
									y="50"
									className="main-title"
                >
                  TRAGIC  LOVE  COMPANY
                </text>
              </svg>
            </div>
            <p className="tag-line text-secondary">
              {this.props.data.site.siteMetadata.introTag}
            </p>
            <p className="caption text-tertiary">
              {this.props.data.site.siteMetadata.description}
            </p>
            <a href="#musicvideo" className="btn">
							WATCH MV
            </a>
          </div>
          <div className="social-buttons">
            <SocialLinks />
          </div>
        </div>
				<MusicVideo />
        <PortfolioList />
        <BlogList />
        <Contact />
      </Layout>
    );
  }
}

export default IndexPage;

export const query = graphql`
	query {
		site {
			siteMetadata {
				title
				capitalizeTitleOnHome
				titleImage
				introTag
				description
				social {
					name
					url
					icon
				}
			}
		}
	}
`;
