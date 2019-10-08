let siteMetadata = {
    title: `Tragic Love Company`,
    capitalizeTitleOnHome: true,
    logo: `/images/logo.png`,
    icon: `/images/icon.png`,
    titleImage: `/images/wall.jpg`,
    introTag: `THREE PIECE ROCK BAND`,
    description: `New single Mesopotamia/Filter ーrelease`,
    author: `@takeshiino21`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: true,
    switchTheme: true,
    navLinks: [
        {
            name: "HOME",
            url: "/"
        },
        {
            name: "ABOUT",
            url: "/about"
        },
        {
            name: "BIOGRAPHY",
            url: "/blog"
        },
        {
            name: "DICOGRAPHY",
            url: "/portfolio"
        },
        {
            name: "CONTACT",
            url: "/contact"
        },
    ],
    footerLinks: [
        {
            name: "Wanna Cool Web?",
            url: "/privacy-policy"
        },
    ],
    social: [
        {
            name: "Facebook",
            icon: "/images/Facebook.svg",
            url: "https://twitter.com/choke_zawa"
        },
        {
            name: "Twitter",
            icon: "/images/Twitter.svg",
            url: "https://twitter.com/BandTLC/status/1172359362695688192"
        },
        {
            name: "Instagram",
            icon: "/images/Instagram.svg",
            url: "https://www.instagram.com/bandtlc/?hl=ja"
        },
        {
            name: "Youtube",
            icon: "/images/Youtube.svg",
            url: "https://www.youtube.com/channel/UCdLN8hv922hFRcczh-siOWg"
        }
    ],
    contact: {
        /* Leave the below value completely empty (no space either) if you don't want a contact form. */
        api_url: "./test.json",
        description: `出演依頼はtwitterのダイレクトメッセージからお願い致します。楽曲の感想やメッセージ等もお気軽に！`,
        mail: "takeshitoras.79@gmail.com",
        phone: "000-000-0000",
        address: "主な拠点：　心斎橋VARON 　京都MOJO"
    },
};

module.exports = {
    siteMetadata: siteMetadata,
    plugins: [
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-embed-youtube",
                        options: {　
                            width: 480,
                            height: 380
                        }
                    },
                    "gatsby-remark-copy-linked-files",
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1280
                        }
                    },
                ]
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `contents`,
                path: `${__dirname}/contents/`
            }
        },
        {
            resolve: `gatsby-plugin-less`,
            options: {
                strictMath: true
            }
        }
    ]
};
