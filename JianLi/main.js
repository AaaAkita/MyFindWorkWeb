new Vue({
    el: '#app',
    data: {
        photoUrl: ''
    },
    mounted() {
        this.loadPhoto();
    },
    methods: {
        loadPhoto() {
            const possibleNames = ['photo.jpg', 'photo.png', 'photo.jpeg', 'photo.webp',
                                   'avatar.jpg', 'avatar.png', 'avatar.jpeg', 'avatar.webp',
                                   'profile.jpg', 'profile.png', 'profile.jpeg', 'profile.webp',
                                   'head.jpg', 'head.png', 'head.jpeg', 'head.webp',
                                   '1.jpg', '1.png', '1.jpeg', '1.webp',
                                   '2.jpg', '2.png', '2.jpeg', '2.webp'];

            const tryLoadImage = (index) => {
                if (index >= possibleNames.length) {
                    this.photoUrl = '';
                    return;
                }

                const img = new Image();
                img.onload = () => {
                    this.photoUrl = 'images/' + possibleNames[index];
                };
                img.onerror = () => {
                    tryLoadImage(index + 1);
                };
                img.src = 'images/' + possibleNames[index];
            };

            tryLoadImage(0);
        }
    }
})
