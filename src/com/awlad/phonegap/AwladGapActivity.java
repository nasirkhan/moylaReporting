package com.awlad.phonegap;

import android.os.Bundle;
import com.phonegap.*;

public class AwladGapActivity extends DroidGap {
	/** Called when the activity is first created. */
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		super.loadUrl("file:///android_asset/www/uploadpic.html");
	}
}