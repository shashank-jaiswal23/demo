import { MediaTextCard } from "./components/MediaTextCard";

function App() {
const block = {
    "id": 487,
    "__component": "cn-components.block-media-text",
    "title": "Work with us",
    "text": "<p><span style=\"background-color:transparent;color:rgb(0,0,0);\">Join a global network of passionate people working to cover and shape our world.</span></p>",
    "size": "Medium",
    "margin": "Regular",
    "displaySeperator": true,
    "colorTheme": "Default",
    "layout": "Right",
    "navTitle": null,
    "navSlug": null,
    "navigationSlug": null,
    "media": {
        "data": {
            "id": 4710,
            "attributes": {
                "name": "20220602 TK SAUCE 0591.jpg",
                "alternativeText": null,
                "caption": null,
                "width": 5909,
                "height": 3324,
                "formats": {
                    "large": {
                        "ext": ".jpg",
                        "url": "https://strapi-bus-eng-prod.s3.amazonaws.com/large_20220602_TK_SAUCE_0591_bbf5ed99df.jpg",
                        "hash": "large_20220602_TK_SAUCE_0591_bbf5ed99df",
                        "mime": "image/jpeg",
                        "name": "large_20220602 TK SAUCE 0591.jpg",
                        "path": null,
                        "size": 102.24,
                        "width": 1000,
                        "height": 563
                    },
                    "small": {
                        "ext": ".jpg",
                        "url": "https://strapi-bus-eng-prod.s3.amazonaws.com/small_20220602_TK_SAUCE_0591_bbf5ed99df.jpg",
                        "hash": "small_20220602_TK_SAUCE_0591_bbf5ed99df",
                        "mime": "image/jpeg",
                        "name": "small_20220602 TK SAUCE 0591.jpg",
                        "path": null,
                        "size": 32.16,
                        "width": 500,
                        "height": 281
                    },
                    "medium": {
                        "ext": ".jpg",
                        "url": "https://strapi-bus-eng-prod.s3.amazonaws.com/medium_20220602_TK_SAUCE_0591_bbf5ed99df.jpg",
                        "hash": "medium_20220602_TK_SAUCE_0591_bbf5ed99df",
                        "mime": "image/jpeg",
                        "name": "medium_20220602 TK SAUCE 0591.jpg",
                        "path": null,
                        "size": 63.99,
                        "width": 750,
                        "height": 422
                    },
                    "thumbnail": {
                        "ext": ".jpg",
                        "url": "https://strapi-bus-eng-prod.s3.amazonaws.com/thumbnail_20220602_TK_SAUCE_0591_bbf5ed99df.jpg",
                        "hash": "thumbnail_20220602_TK_SAUCE_0591_bbf5ed99df",
                        "mime": "image/jpeg",
                        "name": "thumbnail_20220602 TK SAUCE 0591.jpg",
                        "path": null,
                        "size": 9.87,
                        "width": 245,
                        "height": 138
                    }
                },
                "hash": "20220602_TK_SAUCE_0591_bbf5ed99df",
                "ext": ".jpg",
                "mime": "image/jpeg",
                "size": 1762.18,
                "url": "https://strapi-bus-eng-prod.s3.amazonaws.com/20220602_TK_SAUCE_0591_bbf5ed99df.jpg",
                "previewUrl": null,
                "provider": "aws-s3",
                "provider_metadata": null,
                "createdAt": "2023-10-05T23:17:11.461Z",
                "updatedAt": "2023-10-05T23:17:11.461Z"
            }
        }
    },
    "link": {
        "id": 6258,
        "Title": "Explore Career Opportunities",
        "URL": "/careers"
    },
    "modal": null
}

  return <div>
    <MediaTextCard {...block} />
    

  </div>
}

export default App;
