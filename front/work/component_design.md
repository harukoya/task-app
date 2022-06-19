# コンポーネント設計

## atoms

- KbnButton.vue

  - プロパティ
    |プロパティ|説明 |型 |受付可能な値|デフォルト|
    |----------|--------------------|------|------------|----------|
    |type |ボタンの種類 |文字列|text/button |button |
    |disabled |ボタンが無効かどうか|真偽値|false/true |false |
  - イベント
    |イベント|説明 |
    |--------|------------------------|
    |click |ボタンのクリックイベント|
  - スロット
    |スロット|説明 |
    |--------|------------------|
    |- |ボタンのコンテンツ|

- KbnIcon.vue
  - プロパティ
    |プロパティ|説明 |型 |受付可能な値 |デフォルト|
    |----------|--------------|------|-----------------------------------------|----------|
    |icon |アイコンの種類|文字列|faPlus/faCirclePlus/faXmark/faXmarkCircle|- |
  - イベント
    |イベント|説明 |
    |--------|------------------------------|
    |click |アイコンをクリック時のイベント|
  - スロット
    なし

## molecules

- KbnBoadNavigation.vue
- KbnLoginForm.vue
- KbnUserRegistrationForm.vue
- KbnTaskListHeader.vue
- KbnTaskCard.vue
- KbnTaskAddForm.vue
- KbnTaskCategoryAddForm.vue
- KbnTaskDetailForm.vue

## organisms

- KbnTaskList.vue
- KbnTaskBoard.vue

## templates

- KbnLoginView.vue
- KbnUserRegistrationView.vue
- KbnTaskBoardView.vue
- KbnTaskAddModal.vue
- KbnTaskCategoryAddModal.vue
- KbnTaskDetailModel.vue
