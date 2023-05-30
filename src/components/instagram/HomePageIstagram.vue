<template>
  <div class="bao-personal-post">
    <div class="personal-post">
      <div class="title-personal-post">
        <img @click="informationFriend"
             class="avt-personal-post"
             src="@/assets/avt-friend.png"/>
        <div class="name-personal-post">ane.tdiuz</div>
        <div class="craeted-time">5d</div>
      </div>
      <svg aria-label="More options" class="_ab6- three-cham" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)"
           height="24" role="img"
           viewBox="0 0 24 24" width="24">
        <circle cx="12" cy="12" r="1.5"></circle>
        <circle cx="6" cy="12" r="1.5"></circle>
        <circle cx="18" cy="12" r="1.5"></circle>
      </svg>
    </div>
    <img class="post-picture" src="@/assets/avt.jpg"/>
    <div>
      <div class="emotional-interaction">
        <div class="like-share">
          <span id="heart"><i class="fa-regular fa-heart"></i></span>
          <svg @click="commentPost" aria-label="Comment" class="x1lliihq x1n2onr6 emotional-status"
               color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24"
               role="img" viewBox="0 0 24 24" width="24"><title>Comment</title>
            <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor"
                  stroke-linejoin="round" stroke-width="2"></path>
          </svg>
          <svg @click="sharePost" aria-label="Share Post" class="x1lliihq x1n2onr6 emotional-status"
               color="rgb(0, 0, 0)"
               fill="rgb(0, 0, 0)"
               height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share Post</title>
            <line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218"
                  y1="3" y2="10.083"></line>
            <polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                     stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon>
          </svg>
        </div>
        <div>
          <svg aria-label="Save" class="x1lliihq x1n2onr6 save" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)"
               height="24"
               role="img" viewBox="0 0 24 24" width="24"><title>Save</title>
            <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor"
                     stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon>
          </svg>
        </div>
      </div>
      <div class="liked">
        Liked by <span class="interactive-friends">hah_ny</span>
      </div>
      <div class="comment">
        <textarea class="comment-you" placeholder="Add a comment…"></textarea>
        <div>
          <svg aria-label="Emoji" class="x1lliihq x1n2onr6 felling-icon" color="rgb(115, 115, 115)"
               fill="rgb(115, 115, 115)"
               height="13" role="img" viewBox="0 0 24 24" width="13"><title>Emoji</title>
            <path
                d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<style s>
.bao-personal-post {
  width: 80%;
  margin: 0 auto;
}
</style>