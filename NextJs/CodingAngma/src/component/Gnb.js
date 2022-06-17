import { Menu } from "semantic-ui-react";
import { useRouter } from "next/dist/client/router";

export default function Gnb() {

    const router = useRouter();

    // router의 pahtname에 따라서 activeItem을 변수로 만들어서 각 페이지 이름이 들어가도록 하기
    let activeItem;

    if(router.pathname === "/") {
        activeItem = "home";
    } else if( router.pathname === "/about") {
        activeItem = "about";
    }


    function goLink(e, data) {
        if(data.name === 'home') {
            router.push("/");

        } else if(data.name === 'about') {
            router.push("/about"); // router로 이동하면 내용물만 바뀌면서 페이지가 이동되는데
            // location.href = "/about"; // location으로 이동하게 되면 페이지 전체가 새로고침 되면서 이동한다.
            // 그렇게 되면 요청이 늘어나게 되어 spa의 장점이 사라지게 된다.
            // 부드럽게 이동하는 ux도 구현할 수 없다.
            // redux로 상태를 관리하고 있었다면 다 날아갈 수 있다.
        }
    }

    return (
        <Menu inverted>
        <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={goLink}
        />
        <Menu.Item
            name='about'
            active={activeItem === 'about'}
            onClick={goLink}
        />
        <Menu.Item
            name="Contact Us"
            active={activeItem === "contact"}
            onClick={() => {
                router.push("/contact");
            }}
        />    
        </Menu>
    )
}