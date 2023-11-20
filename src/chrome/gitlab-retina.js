// find all img.avatar elements
// if their `src` has "width=NNN"
// then add attribute `srcset` with twice the resolution for hires screens

function sharpenAvatars() {
  const widthRegex = /width=(\d+)/
  let avatars = document.querySelectorAll("img.avatar,img.avatar-tile,img.gl-avatar,img.gl-avatar-circle,img.gl-avatar-s32");
  avatars.forEach(elem => {
    matched = widthRegex.exec(elem.src)
    if (matched) {
      width = Number(matched[1])
      retinaSrc = elem.src.replace(
        `width=${width}`,
        `width=${width*2}`
      )
      elem.srcset = `${retinaSrc} 2x`
    }
  })
}
sharpenAvatars()

// GitLab loads commit messages with XHR after the page load
setTimeout(sharpenAvatars, 1000)

