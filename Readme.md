# Simple site parser

Simple site parser</br>
Parse hrefs, image paths, scripts paths and links from site.

## Usage:
```
$ node ./index.js -u INSERT_YOUR_URL
```

### Json with the results will be at `/project-folder/parsed-data`


## Output example

<details><summary>Output example</summary>
<p>

```
$ node ./index.js -u https://github.com
```

```json
{
    "hrefs": [
        "#start-of-content",
        "https://github.com/",
        "/join?source=header-home",
        "/features",
        "/features/code-review/",
        "/features/project-management/",
        "/features/integrations",
        "/features/actions",
        "/features#team-management",
        "/features#social-coding",
        "/features#documentation",
        "/features#code-hosting",
        "/case-studies",
        "/security",
        "/enterprise",
        "/explore",
        "/topics",
        "/collections",
        "/trending",
        "https://lab.github.com/",
        "https://opensource.guide",
        "/events",
        "https://github.community",
        "https://education.github.com",
        "/marketplace",
        "/pricing",
        "/pricing#feature-comparison",
        "https://enterprise.github.com/contact",
        "/nonprofit",
        "https://education.github.com",
        "/login",
        "/join?source=header-home",
        "/open-source",
        "/business",
        "https://help.github.com/articles/creating-a-strong-password",
        "https://help.github.com/terms",
        "https://help.github.com/privacy",
        "/join?source=button-home",
        "https://enterprise.github.com/contact",
        "https://enterprise.github.com/trial",
        "/join?plan=business&setup_organization=true&source=business-page",
        "/features/code-review",
        "/features/project-management",
        "/features/integrations",
        "/enterprise",
        "/pricing",
        "https://enterprise.github.com/contact",
        "/features/integrations",
        "/marketplace",
        "/case-studies/ariya",
        "/case-studies/freakboy3742",
        "/case-studies/mailchimp",
        "/case-studies/kris-nova",
        "/case-studies/yyx990803",
        "/case-studies/mapbox",
        "/case-studies/jessfraz",
        "/open-source",
        "/personal",
        "/business",
        "https://help.github.com/terms",
        "https://help.github.com/privacy",
        "/",
        "/features",
        "/security",
        "/enterprise",
        "/case-studies?type=customers",
        "/pricing",
        "https://resources.github.com",
        "https://developer.github.com",
        "http://partner.github.com/",
        "https://atom.io",
        "http://electron.atom.io/",
        "https://desktop.github.com/",
        "https://help.github.com",
        "https://github.community",
        "https://services.github.com/",
        "https://githubstatus.com/",
        "https://github.com/contact",
        "https://github.com/about",
        "https://github.blog",
        "/about/careers",
        "/about/press",
        "https://shop.github.com",
        "https://twitter.com/github",
        "https://www.facebook.com/GitHub",
        "https://www.youtube.com/github",
        "https://www.linkedin.com/company/github",
        "https://github.com/github",
        "/site/terms",
        "/site/privacy"
    ],
    "imgs": [
        "https://github.githubassets.com/images/search-key-slash.svg",
        "https://github.githubassets.com/images/modules/site/logos/airbnb-logo.png",
        "https://github.githubassets.com/images/modules/site/logos/sap-logo.png",
        "https://github.githubassets.com/images/modules/site/logos/ibm-logo.png",
        "https://github.githubassets.com/images/modules/site/logos/google-logo.png",
        "https://github.githubassets.com/images/modules/site/logos/paypal-logo.png",
        "https://github.githubassets.com/images/modules/site/logos/bloomberg-logo.png",
        "https://github.githubassets.com/images/modules/site/logos/spotify-logo.png",
        "https://github.githubassets.com/images/modules/site/logos/swift-logo.png",
        "https://github.githubassets.com/images/modules/site/logos/facebook-logo.png",
        "https://github.githubassets.com/images/modules/site/logos/node-logo.png",
        "https://github.githubassets.com/images/modules/site/logos/nasa-logo.png",
        "https://github.githubassets.com/images/modules/site/logos/walmart-logo.png",
        "https://github.githubassets.com/images/modules/site/home-illo-team.svg",
        "https://github.githubassets.com/images/modules/site/home-illo-team-code.svg",
        "https://github.githubassets.com/images/modules/site/home-illo-team-chaos.svg",
        "https://github.githubassets.com/images/modules/site/home-illo-team-tools.svg",
        "https://github.githubassets.com/images/modules/site/home-illo-business.png",
        "https://github.githubassets.com/images/modules/site/integrators/slackhq.png",
        "https://github.githubassets.com/images/modules/site/integrators/zenhubio.png",
        "https://github.githubassets.com/images/modules/site/integrators/travis-ci.png",
        "https://github.githubassets.com/images/modules/site/integrators/atom.png",
        "https://github.githubassets.com/images/modules/site/integrators/circleci.png",
        "https://github.githubassets.com/images/modules/site/integrators/google.png",
        "https://github.githubassets.com/images/modules/site/integrators/codeclimate.png",
        "https://github.githubassets.com/images/modules/site/case-studies/hero/ariya.jpg",
        "https://github.githubassets.com/images/modules/site/case-studies/hero/freakboy3742.jpg",
        "https://github.githubassets.com/images/modules/site/case-studies/hero/mailchimp.jpg",
        "https://github.githubassets.com/images/modules/site/case-studies/hero/kris-nova.jpg",
        "https://github.githubassets.com/images/modules/site/case-studies/hero/yyx990803.jpg",
        "https://github.githubassets.com/images/modules/site/case-studies/hero/mapbox.jpg",
        "https://github.githubassets.com/images/modules/site/case-studies/hero/jessfraz.jpg"
    ],
    "scripts": [
        "https://github.githubassets.com/assets/compat-6e5ed2648dae3be3f9358af5732a780f.js",
        "https://github.githubassets.com/assets/frameworks-3e7d2f629dd4da27222360afe5729ef9.js",
        "https://github.githubassets.com/assets/github-761c8fbdcb7323b48c687fa45c7761b5.js"
    ],
    "links": [
        "https://github.githubassets.com",
        "https://avatars0.githubusercontent.com",
        "https://avatars1.githubusercontent.com",
        "https://avatars2.githubusercontent.com",
        "https://avatars3.githubusercontent.com",
        "https://github-cloud.s3.amazonaws.com",
        "https://user-images.githubusercontent.com/",
        "https://github.githubassets.com/assets/frameworks-a3b8a10d4a9e37a78f033ef4a4f525f5.css",
        "https://github.githubassets.com/assets/github-b5621ac7a31fa904b2627bcd0f6079bc.css",
        "https://github.githubassets.com/assets/site-278e4176d194ae782983c71f1f767503.css",
        "/opensearch.xml",
        "https://github.com/fluidicon.png",
        "https://github.githubassets.com/",
        "https://github.githubassets.com/assets/site-278e4176d194ae782983c71f1f767503.css",
        "https://github.com/",
        "https://github.githubassets.com/pinned-octocat.svg",
        "https://github.githubassets.com/favicon.ico",
        "/manifest.json"
    ]
}
```

</p>
</details>