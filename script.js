function kita() {
        const audioFiles = [
            'kita1.mp3',
            'kita2.mp3',
            'kita3.mp3',
            'kita4.mp3',
            'kita5.mp3',
            'kita6.mp3',
            'kita7.mp3',
            'kita8.mp3',
            'kita9.mp3'
        ];
        const randomKita = audioFiles[Math.floor(Math.random() * audioFiles.length)];
        
        const audio = new Audio(`./sounds/${randomKita}`);
        audio.preload = 'auto';
        audio.volume = 0.5;
        audio.play();
}