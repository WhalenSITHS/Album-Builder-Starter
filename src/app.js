class Album {
  constructor(title, artist, url) {
    this.title = title;
    this.artist = artist;
    this.url = url;
  }
}

const Tullo = {
  name: "Tullo",
  getThis: function () {
    console.log(this);
  },
};
