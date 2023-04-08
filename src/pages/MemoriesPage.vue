<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Tất cả những kỷ niệm của tôi !</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list>
                <ion-item>
                    Venti
                </ion-item>
                <ion-item>
                    Zhongli
                </ion-item>
                <ion-item>
                    Ei
                </ion-item>
                <ion-item>
                    Nahida
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>
<script>
    import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
    export default {
        components: {
            IonPage,
            IonHeader,
            IonToolbar,
            IonTitle,
            IonContent,
            IonList,
            IonItem,
        },
    };
</script>
<style scoped>
   ion-title {
        background-color: red;
   }
</style>