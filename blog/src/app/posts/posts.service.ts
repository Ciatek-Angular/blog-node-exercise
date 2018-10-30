import { Injectable } from '@angular/core'


@Injectable()
export class PostService {
    posts = [
        { 
          id: 0,
          title: 'Nature is awesome',
          body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ype specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s traset sheets containing Lorem Ipsum passages, and more recently .`,
          image: '../assets/images/nature.png'
        },
        { 
          id: 1,
          title: 'Global Warming',
          body: `Glaciers are melting, sea levels are rising, cloud forests are dying, and wildlife is scrambling to keep pace. It's becoming clear that humans have caused most of the past century's warming by releasing heat-trapping gases as we power our modern lives. Called greenhouse gases, their levels are higher now than in the last 650,000 years.
          We call the result global warming.`,
          image: '../assets/images/global-warming.png'
        },
        { 
          id: 2,
          title: 'Web Development',
          body: `Web development is the work involved in developing a web site for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single static page of plain text to complex web-based internet applications (web apps) electronic businesses, and social network services. A more comprehensive list of tasks to which web development commonly refers, may include web engineering, web design, web content development, client liaison, client-side/server-side scripting, web server and network security configuration, and e-commerce development. Among web professionals,.`,
          image: '../assets/images/web-dev.png'
        }
      ]

      addPost(post){
        this.posts.push(post)
      }

      getPost(id){
          let post = this.posts.find( (post) => post.id == id)
          if(post){
            return post
          }
      }

      deletePost(post){
        const index = this.posts.indexOf(post)

        if(index < 0){
            return
        }
        this.posts.splice(index, 1)
      }
}