const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Sprite,
		C3.Behaviors.scrollto,
		C3.Behaviors.Platform,
		C3.Behaviors.bound,
		C3.Behaviors.Flash,
		C3.Behaviors.destroy,
		C3.Plugins.Keyboard,
		C3.Plugins.Particles,
		C3.Plugins.Audio,
		C3.Plugins.Text,
		C3.Behaviors.Platform.Cnds.IsMoving,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Behaviors.Flash.Acts.Flash,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Behaviors.Flash.Acts.StopFlashing,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Behaviors.Platform.Acts.SetMaxSpeed,
		C3.Plugins.Sprite.Cnds.IsOnScreen,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Behaviors.Platform.Cnds.IsByWall,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Behaviors.Platform.Cnds.OnStop,
		C3.Plugins.Sprite.Acts.AddRemoveAnimationFrame,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Cnds.CompareInstanceVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Acts.AddVar
	];
};
self.C3_JsPropNameTable = [
	{Solid: 0},
	{Ground: 0},
	{TiledBackground2: 0},
	{TiledBackground3: 0},
	{ScrollTo: 0},
	{Platform: 0},
	{BoundToLayout: 0},
	{Flash: 0},
	{DestroyOutsideLayout: 0},
	{Player: 0},
	{Keyboard: 0},
	{Coffee: 0},
	{coffeesparkle: 0},
	{move: 0},
	{AIRobo: 0},
	{Smoke: 0},
	{Audio: 0},
	{Sprite: 0},
	{coffee: 0},
	{Text: 0}
];

self.InstanceType = {
	Ground: class extends self.ITiledBackgroundInstance {},
	TiledBackground2: class extends self.ITiledBackgroundInstance {},
	TiledBackground3: class extends self.ITiledBackgroundInstance {},
	Player: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	Coffee: class extends self.ISpriteInstance {},
	coffeesparkle: class extends self.IParticlesInstance {},
	AIRobo: class extends self.ISpriteInstance {},
	Smoke: class extends self.IParticlesInstance {},
	Audio: class extends self.IInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {}
}