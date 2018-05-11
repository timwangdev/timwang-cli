#!/usr/bin/env node

const { h, render, Text } = require('ink');
const Box = require('ink-box');
const Gradient = require('ink-gradient');
const BigText = require('ink-big-text');
const SelectInput = require('ink-select-input');
const Link = require('ink-link');

const opn = require('opn');

const items = [{
	label: 'Website',
	value: 'https://timwang.me'
}, {
	label: 'Github',
	value: 'https://github.com/timwangdev'
}, {
	label: 'Twitter',
	value: 'https://twitter.com/timwangdev'
}, {
	label: 'Steam',
	value: 'https://steamcommunity.com/id/timwangme'
}];

render(
	<div>
		<Box borderStyle="round" borderColor="cyan" padding={1}>
			<Gradient name="mind">
				<BigText text="TIMWANG" space={false}/>
			</Gradient>
		</Box>
		<br/>
		<br/>Hi, my name is Tim Wang, 王尧 in Chinese. I'm a frontend developer and JavaScript enthusiasts.
		<br/>I currently live in Shanghai and work on apps using on react-native.
		<br/>
		<br/>This is my command line interface.
		<br/>Select one item from the list:
		<br/><SelectInput items={items} onSelect={(item) => opn(item.value)}/>
		<br/>
		<Link url="https://github.com/timwangdev/timwang-cli">View Source</Link>
		<br/><Text gray>Press [↑] [↓], or [K] [J] to navigate, [Enter] to select, [ESC] or [Ctrl] + [C] to exit.</Text>
	</div>
);