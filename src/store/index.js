import { createStore } from 'vuex';
const store = createStore({
    state() {
        return {
            memories: [
                {
                    id: "m1", 
                    image: "https://www.pockettactics.com/wp-content/sites/pockettactics/2022/04/genshin-impact-venti-1-550x309.jpg",
                    title: "Venti", 
                    description: "It was really nice memory !"
                },
                {
                    id: "m2", 
                    image: "https://i2.wp.com/gi-builds.sfo3.digitaloceanspaces.com/characters/zhongli/header_image.png?strip=all&quality=10&w=900",
                    title: "Zhongli", 
                    description: "The second time !"
                },
                {
                    id: "m3", 
                    image:"https://imgix.bustle.com/uploads/image/2021/9/9/8a1bfd01-06d3-4a61-b6c1-c6c49b279978-genshin-impact-baal-f2p.jpeg?w=1200&h=630&fit=crop&crop=faces&fm=jpg",
                    title: "Ei", 
                    description: "It was really nice memory !"
                },
            ],
        };
    },
    getters: {
        memories(state) {
            return state.memories;
        },
        memory(state) {
            return (memoryId) => {
                return state.memories.find(memory => memory.id === memory);
            };
        }    
    }
});
export default store;