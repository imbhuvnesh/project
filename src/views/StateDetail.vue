<template>
    <div>
        <h1>{{stateInfo.name}}</h1>
        <div class="state-info">
            <h4 >{{stateInfo.info}}</h4>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            stateInfo : {}
        }
    },
    methods:{
        getData(){
            var id = this.$route.params.id;
            var states = this.$store.state.stateList;
            states = JSON.parse(JSON.stringify(states));
            for(let i = 0; i < states.length; i++){
                if(states[i].id == id){
                    this.stateInfo = states[i];
                    break;
                }
            }
        }
    },
    mounted(){
        this.getData();
    }
}
</script>