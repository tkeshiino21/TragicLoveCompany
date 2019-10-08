import React from 'react';
import SectionTitle from "./sectiontitle";
import '../style/blog-singlepage.less';
import '../style/list-blog.less';
import "../style/list-portfolio.less";

export default function MusicVideo() {
  return (
      <div className="container">
        <article className="blog-post">
        <section id="musicvideo" className="container">
          <div className="section-title">
            <SectionTitle title="NEW RELEASE" />
          </div>
          <div className="item col s12">
          <div className="row flex">
          <div className="content col m6">
              <h3 className="text-primary">
                MusicVideo
              </h3>
              <p className="text-tertiary"> 
                昨年４月に発売した両A面シングル「Mesopotamia/Filter」より、
                "Mesopotamia"のMusic Videoを公開
              </p>
            </div>
            <div className="image col m6">
                <div class="video-wrapper">
                  <div class="video-container">
                  <iframe width='100%' height='480px'
                    src="https://www.youtube.com/embed/ZC8xMCkIm6o"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                  >
                  </iframe>
                  </div>
                </div>
            </div>
            </div>
          </div>
        </section>
        </article>
      </div>
  );
}