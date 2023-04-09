<template>
    <base-layout page-title='All Memories'>
        <ion-list>
            <ion-tem v-for ="memory in memories" :router-link ="`/memories/${memory.id}`" :key="memory.id">
                <ion-thumbnail slot="start">
                    <ion-img :src="memory.image" :alt="memory.title"></ion-img>
                </ion-thumbnail>
                <ion-label>
                    {{ memory.title }}
                </ion-label>
            </ion-tem>
        </ion-list>
    </base-layout>
</template>
<script>
    import { IonList, IonItem, IonImg, IonThumbnail, Ionlabel } from '@ionic/vue';
    export default {
        components: {
            IonList,
            IonItem,
            IonImg,
            IonThumbnail,
            Ionlabel,
        },
        computed: {
            memories() {
                return this.$store.getters.memories;
            },
        },
    };
</script>
<style scoped>
   ion-title {
        background-color: red;
   }
</style>