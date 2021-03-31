## Reshetnikov = 100013750871980
https://developers.facebook.com/apps/3020416811522573/add/

: 3020416811522573

ar100013750871980
fc101187481816228

page_id="101187481816228"

Зарина, [26.03.21 17:05]
624937754760766 (в разработке)
701162330774892 (бизнес)

## CustomChat
https://github.com/seeden/react-facebook

import React, { Component} from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appId="123456789" chatSupport>
        <CustomChat pageId="123456789" minimized={false}/>
      </FacebookProvider>    
    );
  }
}

			<FacebookProvider appId="624937754760766" chatSupport>
				<CustomChat pageId="101187481816228" minimized={false} />
			</FacebookProvider>



Feed
import React, { Component} from 'react';
import { FacebookProvider, Feed } from 'react-facebook';

export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appId="123456789">
        <Feed link="https://www.facebook.com">
          {({ handleClick }) => (
            <button type="button" onClick={handleClick}>Share on Feed</button>
          )}
        </Feed>
      </FacebookProvider>    
    );
  }
}

## kak-poluchit-access-token

https://nikolaus.by/blog/integratsii/kak-poluchit-access-token-instagram-dlya-raboty-s-api/

https://fashioncare.ch/account/logout
https://fashioncare.ch/account/facebookdelete


https://developers.facebook.com/docs/facebook-login/


IGQVJWRWRUcVktLWlzLUpyR21iUkt4a2k5d0hqa1diSWFxLU9oOWZAQNDJWZAVd5alJLNzQtQ1BDeER0S2tyM250emllc2pYOTJmNVdDV0xjaFRZAaGtUWndQLXAtUE9jQklPaXNCanFUb2pLOWM3STJwUQZDZD

not work:
https://api.instagram.com/v1/tags/photographyportfolio/media/recent?access_token=IGQVJWRWRUcVktLWlzLUpyR21iUkt4a2k5d0hqa1diSWFxLU9oOWZAQNDJWZAVd5alJLNzQtQ1BDeER0S2tyM250emllc2pYOTJmNVdDV0xjaFRZAaGtUWndQLXAtUE9jQklPaXNCanFUb2pLOWM3STJwUQZDZD&count=20



https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=IGQVJWRWRUcVktLWlzLUpyR21iUkt4a2k5d0hqa1diSWFxLU9oOWZAQNDJWZAVd5alJLNzQtQ1BDeER0S2tyM250emllc2pYOTJmNVdDV0xjaFRZAaGtUWndQLXAtUE9jQklPaXNCanFUb2pLOWM3STJwUQZDZD



https://localhost:44349/test/chat.html
