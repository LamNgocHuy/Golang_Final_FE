export default {
    data() {
        return {
            isHideSimulator: null,
            messages:[
                {
                    title:"Happy New Year 2022",
                    status: 1,
                    createAt:"06/12/2021 14:00"
                },
                {
                    title:"Happy Birthday To You",
                    status: 5,
                    createAt:"06/12/2021 14:00"
                },
                {
                    title:"Good Morning",
                    status: 2,
                    createAt:"06/12/2021 14:00"
                },
                {
                    title:"GoodNight",
                    status: 4,
                    createAt:"06/12/2021 14:00"
                },
                {
                    title:"How are you ?",
                    status: 5,
                    createAt:"06/12/2021 14:00"
                },
                {
                    title:"Happy Ending",
                    status: 1,
                    createAt:"06/12/2021 14:00"
                },
                {
                    title:"Happy Ending",
                    status: 4,
                    createAt:"06/12/2021 14:00"
                },
                {
                    title:"Happy Ending",
                    status: 2,
                    createAt:"06/12/2021 14:00"
                },
            ],
        }
    },
    methods: {
        async toggleSimulator(index) {
            if (this.isHideSimulator === index) {
                this.$store.dispatch('simulator/toggleSimulator')
            } else {
                this.$store.dispatch('simulator/hideSimulator')
                await new Promise(resolve => setTimeout(resolve, 350))
                this.$store.dispatch('simulator/showSimulator')
            }
            this.isHideSimulator = index
        }
    }
}