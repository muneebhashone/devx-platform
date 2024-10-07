export const posts = [
  {
    id: 1,
      username: "alice_dev",
      content:
        "Just discovered a neat trick in Rust for handling errors. Anyone interested in a thread about it? #RustLang",
      likes: 42,
      time: "2h ago",
      comments: [
        {
          username: "bob_rust",
          content: "Absolutely! Please share!",
          likes: 5,
          time: "1h ago",
        },
        {
          username: "carol_coder",
          content: "I'm always looking to improve my Rust skills. Count me in!",
          likes: 3,
          time: "45m ago",
        },
        {
          username: "dave_debugger",
          content:
            "Is it about the ? operator? That's my favorite Rust feature!",
          likes: 2,
          time: "30m ago",
        },
       
      ],
    },
    {
      id: 2,
      username: "bob_coder",
      content:
        "Thoughts on the new VSCode update? The AI features are quite impressive! #VSCode #DevTools",
      likes: 38,
      time: "4h ago",
      comments: [
        {
          username: "eve_engineer",
          content: "I'm loving the new IntelliCode suggestions!",
          likes: 7,
          time: "3h ago",
        },
        {
          username: "frank_frontend",
          content: "The UI feels snappier too. Great update overall!",
          likes: 4,
          time: "2h ago",
        },
      
      ],
    },
    {
      id: 3,
      username: "charlie_programmer",
      content:
        "Working on a new open-source project for optimizing Docker builds. Contributors welcome! #Docker #OpenSource",
      likes: 31,
      time: "6h ago",
      comments: [
        {
          username: "grace_devops",
          content: "Sounds interesting! Where can I find the repo?",
          likes: 6,
          time: "5h ago",
        },
        {
          username: "henry_hacker",
          content:
            "I'd love to contribute. What kind of optimizations are you focusing on?",
          likes: 3,
          time: "4h ago",
        },
        
      ],
    },
  ];