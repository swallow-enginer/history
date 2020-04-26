<template>
	<v-timeline 
		dense
	>
		<v-timeline-item
			color="purple lighten-2"
			fill-dot
			right
		>
			<v-expansion-panels
				hover
			>
				<v-expansion-panel>
					<v-expansion-panel-header
						color="light-blue accent-4"
						ripple
						
					>
						<h2 class="white--text font-weight-light">タイトル</h2>
						
					</v-expansion-panel-header>
					<v-expansion-panel-content
						class="pt-2">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</v-expansion-panel-content>
				</v-expansion-panel>
			</v-expansion-panels>
			<template v-slot:opposite>
				<div class="text-center font-weight-black headline">7歳</div>
			</template>
		</v-timeline-item>
	</v-timeline>
</template>
<style>
/*丸の幅*/
.v-timeline-item__divider {
  min-width: 65px;
}
/*逆サイドの幅*/
.v-timeline-item__opposite {
    max-width: 80px;
    min-width: 80px;
}

.v-timeline--dense .v-timeline-item__opposite {
    display: inline;
}

/*デバイダーの幅*/
.v-application--is-ltr .v-timeline--dense:not(.v-timeline--reverse):before {
    left: calc(115px - 3px);
}
/*
.v-timeline:first-child:before {
    height: 50%;
    top: 50%;
}

.v-timeline:last-child:before {
    height: 50%;
}
*/
</style>