# drawingplayback
You can view the deployed project here: https://drawingplayback.netlify.app/

--What is this?--

This is a normal pixel art drawing board. But wait is it!?

No, that would be kinda boring, so I added a feature where you can record your actions and then 
playback those actions. To do this. 
1. Press Record
2. Draw stuff
3. Stop Recording
4. Click on Play
5. You can draw while your previous drawing is playing back
6. Click exit play

--How to Use--

The way the recording works is by using an array of objects, keeping track of all the changes when you 
change the color of a square, and when the change occured in milisecond after you pressed record.
It then plays back those changes. And thus, you can live interact with the drawing board, whilst 
your recording is playing back!

You can chain recordings together to create multiple recordings playing back at the same time!

About the drawing board itself, it uses css grid to create 3000 squares. When the user is holding the mouse down it starts to draw
the selected color (which you can choose by clicking on the black sqaure in the right bottom). If you want to erase, you can click on eraser, and now 
it will delete all of the squares you've drawn when you hover over them.

--Social Media--
- Youtube: https://www.youtube.com/channel/UCikWIcChAOSwoc2qpbZ6iIA
- Blog: https://sebcodestheweb.hashnode.dev/
- Github: https://github.com/SebCodesTheWeb

--About me--

Hello! My name is Sebastian, and I'm a high-school student from Sweden. I have dabbled with some front-end development for the past few months. And since Christmas brake finally arrived, I've decided to start a challenge for myself! I'm going to code for the coming 20 days.

I'm following the front-end career path at Scrimba and I'm currently at module 8 (Flexbox, Grid and Fetch)

By the end of the 20 days I'm hoping to have finished the front-end career path and have started with some backend Node.js development. I will be documenting my progress for the coming days, and filming myself on my Youtube-channel, so feel free to follow along my journey and learn with me!
