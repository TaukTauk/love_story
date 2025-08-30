import {LoveStoryWebsite} from "../chapters/Chapter";
import { BouncingHeart } from "../utils/BouncingHeart";

export const MainStory = () => {
  return (
	<div className="font-stalemate" >
		<div className="hidden xl:block">
	  		<LoveStoryWebsite />
		</div>
		<div className="block xl:hidden">
			<BouncingHeart />
		</div>
	</div>
  )
}