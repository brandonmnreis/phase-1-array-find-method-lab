function superbowlWin(records) {
    const selectedRecord = records.find(record => record.result === "W")
    if (selectedRecord){
        return selectedRecord.year
    }
}