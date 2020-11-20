export const ledOn = () => {
    return (dipatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        var ip = '';
        const user = firebase.auth().currentUser.uid;
        firestore.collection('auth').doc(user).get().then((snapshot) => {
            if(snapshot.exists) {
                ip = snapshot.data().ip;
            }
        })
        firebase.database().ref('ledStatus/' + ip).set({estado: 1}).then(()=>{
                console.log('led prendido')
            }).catch((err)=>{
                console.log(err);
            })
    }
}

export const ledOff = () => {
    return (dipatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        var ip = '';
        const user = firebase.auth().currentUser.uid;
        firestore.collection('auth').doc(user).get().then((snapshot) => {
            if(snapshot.exists) {
                ip = snapshot.data().ip;
            }
        })
        firebase.database().ref('ledStatus/' + ip).set({ estado: 0 }).then(()=>{
                console.log('led apagado')
            }).catch((err)=>{
                console.log(err);
            })
    }
}

export const alarmOn = () => {
    return (dipatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        var ip = '';
        const user = firebase.auth().currentUser.uid;
        firestore.collection('auth').doc(user).get().then((snapshot) => {
            if(snapshot.exists) {
                ip = snapshot.data().ip;
            }
        })
        firebase.database().ref('alarmStatus/' + ip).set({ estado: 1 }).then(()=>{
                console.log('alarma prendida')
            }).catch((err)=>{
                console.log(err);
            })
    }
}

export const alarmOff = () => {
    return (dipatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        var ip = '';
        const user = firebase.auth().currentUser.uid;
        firestore.collection('auth').doc(user).get().then((snapshot) => {
            if(snapshot.exists) {
                ip = snapshot.data().ip;
            }
        })
        firebase.database().ref('alarmStatus/' + ip).set({ estado: 0 }).then(()=>{
                console.log('alarma apagada')
            }).catch((err)=>{
                console.log(err);
            })
    }
}