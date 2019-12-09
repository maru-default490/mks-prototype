import React, { Component } from 'react';
import Makestartext from './makestartext';
import styled from 'styled-components';

const HeaderStyled = styled.div`
    header{
        width:100%;
        height:100px;
        display:flex;
        justify-content: space-between;
        align-items:center;
        padding-left:20px;
    }
    .logo{
        font-size:45px;
        font-weight:bold;
        text-decoration:none;
    }
    header ul{
        width:200px;
        display:flex;
        flex-direction: row;
        padding-right:20px;
    }
    header ul li{
        list-style:none;
        margin-left:20px;
    }
    header ul li:first-child::after{
        margin-left:20px;
        content:"|"
    }
    header ul li a{
        color:black;
        text-decoration:none;
    }
`;

class Header extends( Component ){
    render(){
        return(
            <HeaderStyled>
                <header>
                    <a href="#" className="logo"><Makestartext /></a>
                    <ul>
                        <li><a href="#">회사 소개</a></li>
                        <li><a href="#">채용</a></li>
                    </ul>
                </header>
            </HeaderStyled>
        );
    }
}
export default Header;