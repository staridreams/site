use warp::Filter;

#[tokio::main]
async fn main() {
    let blog = warp::path!("blog" / String).map(|slug| format!("{}", slug));

    let routes = blog;

    warp::serve(routes).run(([127, 0, 0, 1], 3030)).await;
}
