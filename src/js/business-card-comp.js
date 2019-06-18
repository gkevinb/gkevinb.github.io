Vue.component("business-card-tab", {
    name: "business-card-tab",
    template:  `<div :id="name">
                <div id="business-card__front">
                    <div id="name">Gabor Kevin Barta</div>
                    <div id="laptop"></div>
                    <div id="keyboard"></div>
                    <div id="mousepad"></div>
                    <div id="screen"></div>
                    <div id="tab"></div>
                    <div id="coding"><./.></div>
                    <div id="exit"></div>
                    <div id="empty"></div>
                    <div id="minimize"></div>
                    <div id="red-line__1"></div>
                    <div id="red-line__2"></div>
                    <div id="red-line__3"></div>
                    <div id="red-line__4"></div>
                    <div id="red-line__5"></div>
                    <div id="red-line__6"></div>
                    <div id="red-line__7"></div>
                    <div id="red-line__8"></div>
                    <div id="red-line__9"></div>
                    <div id="position">Fullstack Developer</div>
                </div>
                </div>`,
    data: function () {
        return {
            name: "business-card-tab"
        }
    }
})
