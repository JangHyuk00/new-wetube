let videos = [
    {
        title: "the First one",
        rating: 5,
        comment: 2,
        createAt: "10 mins ago",
        views: 59,
        id: 1,
    }, 
    {
        title: "the Second one",
        rating: 5,
        comment: 2,
        createAt: "5 mins ago",
        views: 59,
        id: 2,
    }, 
];

export const trending = (req, res) => { 
    res.render("home", {pageTitle: "Home", videos});
};
export const watch = (req, res) => {
    const {id} = req.params;
    const video = videos[id-1];
    res.render("watch", {pageTitle: `watching ${video.title}`, video});
};
export const getEdit = (req, res) => {
    const {id} = req.params;
    const video = videos[id-1];
    return res.render("edit", {pageTitle: `Editing ${video.title}`, video});
};
export const postEdit = (req, res) => {
    const {id} = req.params;
    const {title} = req.body;
    videos[id-1].title = title; 
    return res.redirect(`/videos/${id}`);
};
export const getUpload = (req, res) => {
    return res.render("upload");
};
export const postUpload = (req, res) => {
    const newVideo = {
        title: req.body.title,
        rating: 0,
        comment: 0,
        createAt: "just now",
        views: 0,
        id: videos.length + 1 ,
    };
    videos.push(newVideo);
    res.redirect("/");
}