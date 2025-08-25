/**
 * スクロールに応じて要素をフェードイン・アウトさせるためのロジック
 */
document.addEventListener('DOMContentLoaded', () => {
    // アニメーションさせたい要素をすべて取得
    const animationTargets = document.querySelectorAll('.fade-in');

    // IntersectionObserverのオプション設定
    const options = {
        root: null, // ビューポートをルートとする
        rootMargin: '0px',
        threshold: 0.1 // 10%要素が見えたらコールバックを実行
    };

    // IntersectionObserverのコールバック関数
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            // 要素がビューポート内に入った場合
            if (entry.isIntersecting) {
                // is-visibleクラスを追加してアニメーションを発火
                entry.target.classList.add('is-visible');
            } else {
                // 要素がビューポートから外れた場合
                // is-visibleクラスを削除して要素を非表示の状態に戻す
                entry.target.classList.remove('is-visible');
            }
        });
    };

    // IntersectionObserverのインスタンスを作成
    const observer = new IntersectionObserver(callback, options);

    // 各ターゲット要素を監視
    animationTargets.forEach(target => {
        observer.observe(target);
    });
});
