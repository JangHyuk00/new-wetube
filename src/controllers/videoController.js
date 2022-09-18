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
export const edit = (req, res) => res.send("edit video");
export const search = (req, res) => res.send("search");
export const upload = (req, res) => res.send("upload");
export const deleteVideo = (req, res) => res.send("delete video");