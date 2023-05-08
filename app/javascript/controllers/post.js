function mark_delete(e){
    console.log(e.checked)
    if (e.checked) {
        document.getElementById('con_' + e.id).classList.remove('marked')
        document.getElementById('del-text-' + e.id).classList.remove('marked')
    } else {
        document.getElementById('con_' + e.id).classList.add('marked')
        document.getElementById('del-text-' + e.id).classList.add('marked')
    }

}